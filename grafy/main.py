from typing import Tuple, List


def read_graph(filename: str) -> Tuple[List[List[int]], int]:
    with open(filename, 'r') as file:
        lines = file.readlines()

    funnyvertexcounter = int(lines[0].strip())
    listofadjacentthingies: List[List[int]] = []

    for line in lines[1:]:
        neighbors = list(map(int, line.strip().split()))
        listofadjacentthingies.append(neighbors)

    return listofadjacentthingies, funnyvertexcounter


def write_neighbours_list(listofadjacentthingies: List[List[int]]) -> None:
    for vertex, neighbors in enumerate(listofadjacentthingies):
        print(f"Sąsiadami wierzchołka {vertex} są: {', '.join(map(str, neighbors))}")


def list_to_matrix(listofadjacentthingies: List[List[int]]) -> List[List[int]]:
    funnyvertexcounter = len(listofadjacentthingies)
    matrix: List[List[int]] = [[0 for _ in range(funnyvertexcounter)] for _ in range(funnyvertexcounter)]

    for vertex, neighbors in enumerate(listofadjacentthingies):
        for neighbor in neighbors:
            matrix[vertex][neighbor] = 1

    return matrix


def write_matrix(matrix: List[List[int]]) -> None:
    print("Macierz sąsiedztwa:")
    for row in matrix:
        print(" ".join(map(str, row)))


def main() -> None:
    filename = 'graph.txt'
    listofadjacentthingies, funnyvertexcounter = read_graph(filename)

    print(f"\nLiczba wierzchołków: {funnyvertexcounter}\n")
    write_neighbours_list(listofadjacentthingies)

    matrix = list_to_matrix(listofadjacentthingies)
    print()
    write_matrix(matrix)

if __name__ == "__main__":
    main()