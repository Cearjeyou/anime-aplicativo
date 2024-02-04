package com.anime.backend.service.anime.impl;

import com.anime.backend.dto.anime.ScoreRequest;
import com.anime.backend.dto.anime.ScoreResponse;
import com.anime.backend.enums.GroupAnime;
import com.anime.backend.service.anime.AnimeService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnimeServiceImpl implements AnimeService {
    @Override
    public List<ScoreResponse> classifyAnimeScore(List<ScoreRequest> scores) {
        List<ScoreResponse> groups = new ArrayList<>();
        scores.forEach(anime -> {
            if (anime.getScore() <= 4) {
                groups.add(
                        ScoreResponse.builder()
                                .idAnime(anime.getIdAnime())
                                .group(GroupAnime.NOT_FUN)
                                .build()
                );
            } else if (anime.getScore() <= 7) {
                groups.add(
                        ScoreResponse.builder()
                                .idAnime(anime.getIdAnime())
                                .group(GroupAnime.FUN)
                                .build()
                );
            } else {
                groups.add(
                        ScoreResponse.builder()
                                .idAnime(anime.getIdAnime())
                                .group(GroupAnime.GREAT)
                                .build()
                );
            }
        });
        return groups;
    }
}
