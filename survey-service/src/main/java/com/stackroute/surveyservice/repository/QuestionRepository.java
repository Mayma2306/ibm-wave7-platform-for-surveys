package com.stackroute.surveyservice.repository;

import com.stackroute.surveyservice.domain.Question;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends Neo4jRepository<Question,Long> {
    @Query("MATCH (a:Question), (b:Survey) WHERE a.question_id = {questionId} AND b.id = {surveyId} CREATE (a)-[: BelongsTo]->(b) RETURN a,b")
    void createBelongsToRelationShip(Long questionId,Integer surveyId);
}
