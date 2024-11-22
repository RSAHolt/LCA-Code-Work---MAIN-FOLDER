import pygame
import time
import random
pygame.font.init()

WIDTH, HEIGHT = 1000,800
WIN = pygame.display.set_mode((WIDTH,HEIGHT))
pygame.display.set_caption("Do NOT Dally")
BG = pygame.transform.scale(pygame.image.load("images\souse.png"),(WIDTH,HEIGHT))

PLAYER_WIDTH = 40
PLAYER_HEIGHT = 60
PLAYER_VEL = 10
PLAYER_ACC = 2

FONT=pygame.font.SysFont("comicsans",30)

def draw(player,elapsed_time):
    WIN.blit(BG,(0,0))

    time_text = FONT.render(f"Time: {round(elapsed_time)}s",1,"yellow")
    WIN.blit(time_text,(10,10))
    pygame.draw.rect(WIN, "red",player)
    pygame.display.update()

def main():
    run=True

    player = pygame.Rect(200,HEIGHT-PLAYER_HEIGHT,PLAYER_WIDTH,PLAYER_HEIGHT)
    clock = pygame.time.Clock()
    start_time = time.time()
    elapsed_time = 0
    jumping=False
    jump_time=1

    while run:
        clock.tick(60)
        elapsed_time = time.time() - start_time
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
                break
        if player.y<HEIGHT-PLAYER_HEIGHT:
                player.y+=(PLAYER_VEL*jump_time-0.5*PLAYER_ACC*jump_time**2)
        
        keys = pygame.key.get_pressed()
        if keys[pygame.K_a] and player.x - PLAYER_VEL >=0:
            player.x -= PLAYER_VEL
        if keys[pygame.K_d] and player.x + PLAYER_VEL + player.width <= WIDTH:
            player.x += PLAYER_VEL
        if keys[pygame.K_SPACE] and player.y-PLAYER_VEL>=0:
           for i in range(1):
                player.y-= PLAYER_VEL*PLAYER_ACC
        if not jumping:
            if keys[pygame.K_SPACE] and player.y + PLAYER_HEIGHT>=HEIGHT:
                jumping = False
                jump_time+=1
        else:
            jump_time+=1

            if player.y>=HEIGHT-PLAYER_HEIGHT:
                player.y=HEIGHT-PLAYER_HEIGHT
                jumping = True
                jump_time=0

        draw(player,elapsed_time)

    pygame.quit()

if __name__=="__main__":
    main()