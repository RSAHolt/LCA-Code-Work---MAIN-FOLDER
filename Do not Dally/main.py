import pygame
import time
import random
pygame.font.init()

WIDTH, HEIGHT = 1000, 800
WIN = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Do NOT Dally")
BG = pygame.transform.scale(pygame.image.load("images/souse.png"), (WIDTH, HEIGHT))

PLAYER_WIDTH = 80
PLAYER_HEIGHT = 120
PLAYER_VEL = 10
GRAVITY = 0.5
JUMP_VEL = 15

FONT = pygame.font.SysFont("comicsans", 30)

class Platform:
    def __init__(self, x, y, width, height, color):
        self.rect = pygame.Rect(x, y, width, height)
        self.color = color
    
    def draw(self):
        pygame.draw.rect(WIN, self.color, self.rect)
        
    def check_collision(self, player):
        return player.colliderect(self.rect)

def draw(player, platforms, elapsed_time, current_frame):
    WIN.blit(BG, (0, 0))

    time_text = FONT.render(f"Time: {round(elapsed_time)}s", 1, "yellow")
    WIN.blit(time_text, (10, 10))
    
    # Draw the animated player instead of a rectangle
    WIN.blit(current_frame, (player.x, player.y))
    
    for platform in platforms:
        platform.draw()

    pygame.display.update()

def main():
    run = True
    player = pygame.Rect(200, HEIGHT - 100 - PLAYER_HEIGHT, 80, 120)
    clock = pygame.time.Clock()
    start_time = time.time()
    elapsed_time = 0
    jumping = False
    velocity_y = 0  # Initialize vertical velocity
    jump_frame_index = 0  # Index for jump animation frames
    walk_frame_index = 0  # Index for walk animation frames
    frame_counter = 0  # Frame counter for jump animation
    walk_frame_counter = 0  # Frame counter for walk animation
    FRAME_DELAY = 10  # Number of frames between switching jump animation images
    WALK_FRAME_DELAY = 10  # Number of frames between switching walk animation images
    FALL_DELAY = 0.3  # Delay before the falling animation starts (in seconds)
    
    # Load the character animation frames for walking
    walk_images_right = [
        pygame.transform.scale(pygame.image.load("images/character/walk1.png"),(80, 120)),
        pygame.transform.scale(pygame.image.load("images/character/walk2.png"),(80, 120)),
        pygame.transform.scale(pygame.image.load("images/character/walk3.png"),(80, 120)),
        pygame.transform.scale(pygame.image.load("images/character/walk4.png"),(80, 120))
    ]
    
    # Create a list for the flipped walking frames (for left movement)
    walk_images_left = [pygame.transform.flip(image, True, False) for image in walk_images_right]
    
    # Load the idle frame (if you have one)
    idle_image_right = pygame.transform.scale(pygame.image.load("images/character/idle.png"),(80, 120))
    idle_image_left = pygame.transform.flip(idle_image_right, True, False)
    
    # Load the character animation frames for jumping
    jump_images_right = [
        pygame.transform.scale(pygame.image.load("images/character/jump1.png"),(80, 120)),
        pygame.transform.scale(pygame.image.load("images/character/jump2.png"),(80, 120)),
        pygame.transform.scale(pygame.image.load("images/character/jump3.png"),(80, 120))
    ]

    # Create flipped jump images for the left direction
    jump_images_left = [pygame.transform.flip(image, True, False) for image in jump_images_right]

    # Load the character animation frame for falling
    falling_image_right = pygame.transform.scale(pygame.image.load("images/character/pick2.png"), (80, 120))
    falling_image_left = pygame.transform.flip(falling_image_right, True, False)

    
    # Set the initial walking frame index
    walk_index = 0
    
    # Variable to track whether the character is facing left or right
    is_facing_left = False
    fall_start_time = None  # To track the start time of falling animation
    
    # Creating a list of platform objects
    platforms = [
        Platform(300, 600, 200, 20, "blue"),
        Platform(400, 100, 200, 20, "orange"),
        Platform(100, 350, 200 ,20,"yellow"),
        Platform(0, 780, 1000, 20, "RED" )
    ]

    while run:
        clock.tick(60)
        elapsed_time = time.time() - start_time

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
                break

        keys = pygame.key.get_pressed()

        # Walking logic
        if keys[pygame.K_a] or keys[pygame.K_d]:
            if keys[pygame.K_a]:
                player.x -= PLAYER_VEL  # Move left
                is_facing_left = True  # Flip sprite for left movement
            if keys[pygame.K_d]:
                player.x += PLAYER_VEL  # Move right
                is_facing_left = False  # Flip sprite for right movement

            # Animate walking (cycling through walk images)
            walk_frame_counter += 1
            if walk_frame_counter >= WALK_FRAME_DELAY:
                walk_frame_counter = 0  # Reset the counter
                walk_frame_index += 1  # Move to the next walk frame

                if walk_frame_index >= len(walk_images_right):
                    walk_frame_index = 0  # Loop the walk animation

            current_frame = walk_images_left[walk_frame_index] if is_facing_left else walk_images_right[walk_frame_index]  # Choose the correct frame
        else:
            # If no movement keys are pressed, show the idle frame
            current_frame = idle_image_left if is_facing_left else idle_image_right

        # Jumping logic
        if not jumping:
            if keys[pygame.K_SPACE] and (player.y + PLAYER_HEIGHT >= HEIGHT or any(platform.check_collision(player) for platform in platforms)):
                jumping = True
                velocity_y = -JUMP_VEL
                jump_frame_index = 0  # Reset jump animation frame
                fall_start_time = None  # Reset fall timer when jumping
        else:
            velocity_y += GRAVITY
            player.y += velocity_y

            # Increment the frame counter to slow down the animation
            frame_counter += 1
            if frame_counter >= FRAME_DELAY:
                frame_counter = 0  # Reset the counter
                jump_frame_index += 1  # Move to the next jump frame

                # Cycle through jump frames
                if jump_frame_index >= len(jump_images_right):
                    jump_frame_index = len(jump_images_right)-1  # Prevents Jump index from reaching beyond the limit
             
            # Choose the correct jump frame based on the character's direction
            if is_facing_left:
                current_frame = jump_images_left[jump_frame_index]
            else:
                current_frame = jump_images_right[jump_frame_index]

            # Check for collision with any platform
            for platform in platforms:
                if platform.check_collision(player) and velocity_y >= 0:  # Only land if falling
                    player.y = platform.rect.y - PLAYER_HEIGHT  # Place player on top of the platform
                    jumping = False
                    velocity_y = 0  # Reset vertical velocity when landing on the platform
                    fall_start_time = None  # Reset fall timer when landing
                    break  # No need to check further platforms once we land

        # Falling logic with delay before animation
        if not any(platform.check_collision(player) for platform in platforms) and velocity_y > 0:
            if fall_start_time is None:
                fall_start_time = time.time()  # Start the fall timer when the player begins falling
            
            # Check if the delay has passed before showing the falling animation
            if time.time() - fall_start_time >= FALL_DELAY:
                if is_facing_left:
                    current_frame = falling_image_left
                else:
                    current_frame = falling_image_right

        # Apply gravity if the player is not on the ground or platform
        if not any(platform.check_collision(player) for platform in platforms):
            velocity_y += GRAVITY
            player.y += velocity_y

        draw(player, platforms, elapsed_time, current_frame)

    pygame.quit()

if __name__ == "__main__":
    main()
