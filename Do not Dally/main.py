import pygame
import time
import random
pygame.font.init()

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

class Platform:
    def __init__(self, x, y, width, height, color):
        self.rect = pygame.Rect(x, y, width, height)
        self.color = color
    
    def draw(self):
        pygame.draw.rect(WIN, self.color, self.rect)
        
    def check_collision(self, player):
        return player.colliderect(self.rect)

def draw(player, platforms, elapsed_time):
    WIN.blit(BG, (0, 0))

    time_text = FONT.render(f"Time: {round(elapsed_time)}s", 1, "yellow")
    WIN.blit(time_text, (10, 10))
    pygame.draw.rect(WIN, "red", player)
    
    for platform in platforms:
        platform.draw()

    pygame.display.update()

def main():
    run = True
    player = pygame.Rect(200, HEIGHT - 100 - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT)
    clock = pygame.time.Clock()
    start_time = time.time()
    elapsed_time = 0
    jumping = False
    velocity_y = 0  # Initialize vertical velocity

    # Creating a list of platform objects
    platforms = [
        Platform(300, 600, 200, 20, "blue"),
        Platform(400, 450, 200, 20, "orange"),
        Platform(100, 350, 200 ,20,"yellow"),
        Platform(0,780,1000,20,"RED" )
        # Add more platforms here easily
    ]

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
            if keys[pygame.K_SPACE] and (player.y + PLAYER_HEIGHT >= (HEIGHT ) or any(platform.check_collision(player) for platform in platforms)):
                jumping = True
                velocity_y = -JUMP_VEL
        else:
            velocity_y += GRAVITY
            player.y += velocity_y

            # Check for collision with any platform
            for platform in platforms:
                if platform.check_collision(player) and velocity_y >= 0:  # Only land if falling
                    player.y = platform.rect.y - PLAYER_HEIGHT  # Place player on top of the platform
                    jumping = False
                    velocity_y = 0  # Reset vertical velocity when landing on the platform
                    break  # No need to check further platforms once we land

        # Apply gravity if the player is not on the ground or platform
        if not jumping and player.y < HEIGHT - PLAYER_HEIGHT:
            velocity_y += GRAVITY
            player.y += velocity_y

        draw(player, platforms, elapsed_time)

    pygame.quit()

if __name__ == "__main__":
    main()
