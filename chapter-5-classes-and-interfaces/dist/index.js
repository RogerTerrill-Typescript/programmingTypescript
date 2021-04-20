"use strict";
//===CLASSES===
// Represents a chess game
class Game {
    constructor() {
        this.pieces = Game.makePieces();
    }
    static makePieces() {
        return [
            // Kings
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
        ];
    }
}
// A chess piece
class Piece {
    constructor(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
    moveTo(position) {
        this.position = position;
    }
}
// A set of coordinates for a piece
class Position {
    constructor(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    distanceFrom(position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
        };
    }
}
class King extends Piece {
    // Since we are not using the constructor, we don't need a super()
    canMoveTo(position) {
        let distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    }
}
// class Queen extends Piece {}
// class Bishop extends Piece {}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}
//# sourceMappingURL=index.js.map