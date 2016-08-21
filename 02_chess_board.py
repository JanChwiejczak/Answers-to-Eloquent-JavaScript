# Print arbitrary size chess board to screen

size = 4

# First Method
even_row = ''.join(['# '] * (size // 2))
odd_row = ''.join([' #'] * (size // 2))
board = [even_row if x % 2 == 0 else odd_row for x in range(1, size + 1)]
print('\n'.join(board))


# Second Method
def board_piece():
    pieces = ' #'
    while True:
        for p in pieces:
            yield p
piece = board_piece()

for i in range(1, (size ** 2) + 1):
    if i % size == 0:
        print(next(piece))
        next(piece)  # Switch first piece in next row
    else:
        print(next(piece), end='')
