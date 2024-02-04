package com.anime.backend.dto.anime;

import com.anime.backend.enums.GroupAnime;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ScoreResponse {
    private String idAnime;
    private GroupAnime group;
}
