# Print arbitrary size chess board to screen
size = 4

# First Method
even_row = '#_' * (size // 2)
odd_row = '_#' * (size // 2)
if size % 2 != 0:
    even_row += '#'
    odd_row += '_'
board = [even_row if x % 2 == 0 else odd_row for x in range(1, size + 1)]
print('\n'.join(board))


# Second Method - Using a simple piece generator
def board_piece():
    pieces = '_#'
    while True:
        for p in pieces:
            yield p
piece = board_piece()

for i in range(1, (size ** 2) + 1):
    if i % size != 0:
        print(next(piece), end='')
    else:
        print(next(piece))  # Last piece in a row printed with newline
        next(piece)  # Switch first piece in next row
