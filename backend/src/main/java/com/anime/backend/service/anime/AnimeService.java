package com.anime.backend.service.anime;

import com.anime.backend.dto.anime.ScoreRequest;
import com.anime.backend.dto.anime.ScoreResponse;
import com.anime.backend.model.Anime;

import java.util.List;

public interface AnimeService {
    List<ScoreResponse> classifyAnimeScore(List<ScoreRequest> scores);
    Anime create(Anime anime);
    List<Anime> findByUser(String name);
}
