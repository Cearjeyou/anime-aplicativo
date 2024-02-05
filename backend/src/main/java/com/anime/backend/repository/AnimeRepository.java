package com.anime.backend.repository;

import com.anime.backend.model.Anime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimeRepository extends JpaRepository<Anime, Integer> {
    @Query("SELECT a FROM Anime a WHERE a.user.name = ?1")
    List<Anime> findByUser(String user);
}
