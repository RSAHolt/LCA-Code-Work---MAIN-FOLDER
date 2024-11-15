import pygame
import time
import random

WIDTH, HEIGHT = 1000,800
WIN = pygame.display.set_mode((WIDTH,HEIGHT))
pygame.display.set_caption("Do NOT Dally")
BG = pygame.transform.scale(pygame.image.load("images\sousies.jpg"),(WIDTH,HEIGHT))

def draw():
    WIN.blit(BG,(0,0))
    pygame.display.update()

def main():
    run=True

    while run:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
                break

        draw()

    pygame.quit()

if __name__=="__main__":
    main()