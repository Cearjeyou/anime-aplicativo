package com.anime.backend.service.anime.impl;

import com.anime.backend.dto.anime.ScoreRequest;
import com.anime.backend.dto.anime.ScoreResponse;
import com.anime.backend.enums.GroupAnime;
import com.anime.backend.model.Anime;
import com.anime.backend.repository.AnimeRepository;
import com.anime.backend.service.anime.AnimeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class AnimeServiceImpl implements AnimeService {
    private AnimeRepository animeRepository;
    @Override
    public List<ScoreResponse> classifyAnimeScore(List<ScoreRequest> scores) {
        List<ScoreResponse> groups = new ArrayList<>();
        scores.forEach(anime -> {
            if (anime.getScore() < 5) {
                groups.add(
                        ScoreResponse.builder()
                                .idAnime(anime.getIdAnime())
                                .group(GroupAnime.NOT_FUN)
                                .build()
                );
            } else if (anime.getScore() < 8) {
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

    @Override
    public Anime create(Anime anime) {
        return animeRepository.save(anime);
    }

    @Override
    public List<Anime> findByUser(String name) {
        return animeRepository.findByUser(name);
    }
}
