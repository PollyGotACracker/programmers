function solution(hp, ants = 0) {
    if (hp === 0) return ants;
    if (hp < 3) return ants + hp;
    if (hp < 5) return solution(hp % 3, ants + Math.floor(hp / 3));
    return solution(hp % 5, ants + Math.floor(hp / 5));
}