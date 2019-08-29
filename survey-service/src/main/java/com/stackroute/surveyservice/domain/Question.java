package com.stackroute.surveyservice.domain;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@NodeEntity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String question_id;
    private String question_tag;
    private String[] choices;
    private String surveyId;
}
