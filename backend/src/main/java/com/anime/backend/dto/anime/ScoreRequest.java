package com.anime.backend.dto.anime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ScoreRequest {
    private String idAnime;
    private Double score;
}
