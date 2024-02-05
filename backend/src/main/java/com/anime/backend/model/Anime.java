package com.anime.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "animes")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Anime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;

    @Column(name = "url_img")
    private String urlImg;

    @Column(name = "score")
    private Double score;

    @Column(name = "type")
    private String type;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;
}
