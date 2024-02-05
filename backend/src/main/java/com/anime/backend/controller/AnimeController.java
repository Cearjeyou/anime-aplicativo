package com.anime.backend.controller;

import com.anime.backend.dto.anime.ScoreRequest;
import com.anime.backend.dto.anime.ScoreResponse;
import com.anime.backend.model.Anime;
import com.anime.backend.service.anime.AnimeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/animes")
@AllArgsConstructor
@CrossOrigin(origins = {"*"})
public class AnimeController {
    private AnimeService animeService;

    @PostMapping("/score")
    public ResponseEntity<List<ScoreResponse>> classifyScore(@RequestBody List<ScoreRequest> scores) {
        return ResponseEntity.ok(animeService.classifyAnimeScore(scores));
    }

    @PostMapping
    public ResponseEntity<Anime> create(@RequestBody Anime anime) {
        return ResponseEntity.ok(animeService.create(anime));
    }

    @GetMapping("/{users}")
    public ResponseEntity<List<Anime>> findByUser(@PathVariable(name = "users") String users) {
        return ResponseEntity.ok(animeService.findByUser(users));
    }
}
