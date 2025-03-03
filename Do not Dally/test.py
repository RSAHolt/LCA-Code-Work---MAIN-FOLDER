import pygame
import time

pygame.font.init()

# Constants
WIDTH, HEIGHT = 1000, 800
WIN = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Do NOT Dally")
BG = pygame.transform.scale(pygame.image.load("images/souse.png"), (WIDTH, HEIGHT))

PLAYER_WIDTH = 40
PLAYER_HEIGHT = 60
PLAYER_VEL = 10
GRAVITY = 0.5
JUMP_VEL = 15

FONT = pygame.font.SysFont("comicsans", 30)

# Define the platform
PLATFORM_WIDTH = 200
PLATFORM_HEIGHT = 20
PLATFORM = pygame.Rect(300, 600, PLATFORM_WIDTH, PLATFORM_HEIGHT)

def draw(player, elapsed_time):
    WIN.blit(BG, (0, 0))
    time_text = FONT.render(f"Time: {round(elapsed_time)}s", 1, "yellow")
    WIN.blit(time_text, (10, 10))
    pygame.draw.rect(WIN, "red", player)
    pygame.draw.rect(WIN, "blue", PLATFORM)
    pygame.display.update()

def main():
    run = True
    player = pygame.Rect(200, HEIGHT - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT)
    clock = pygame.time.Clock()
    start_time = time.time()
    elapsed_time = 0
    jumping = False
    velocity_y = 0  # Initialize vertical velocity

    while run:
        clock.tick(60)
        elapsed_time = time.time() - start_time
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
                break
        
        keys = pygame.key.get_pressed()
        if keys[pygame.K_a] and player.x - PLAYER_VEL >= 0:
            player.x -= PLAYER_VEL
        if keys[pygame.K_d] and player.x + PLAYER_VEL + player.width <= WIDTH:
            player.x += PLAYER_VEL

        # Jumping logic
        if not jumping:
            if keys[pygame.K_SPACE] and (player.y + PLAYER_HEIGHT >= HEIGHT or player.colliderect(PLATFORM)):
                jumping = True
                velocity_y = -JUMP_VEL
        else:
            velocity_y += GRAVITY
            player.y += velocity_y
            
            # Check for collision with the platform
            if player.colliderect(PLATFORM):
                if velocity_y >= 0:  # Only land if falling
                    player.y = PLATFORM.y - PLAYER_HEIGHT  # Place player on top of the platform
                    jumping = False
                    velocity_y = 0  # Reset vertical velocity when landing on the platform

            # Check if the player has fallen below the ground
            if player.y >= HEIGHT - PLAYER_HEIGHT:
                player.y = HEIGHT - PLAYER_HEIGHT
                jumping = False
                velocity_y = 0  # Reset vertical velocity when landing

        # Apply gravity if the player is not on the ground or platform
        if jumping and player.y < HEIGHT - PLAYER_HEIGHT:
            player.y += velocity_y

        draw(player, elapsed_time)

    pygame.quit()

if __name__ == "__main__":
    main()