package com.stackroute.surveyservice.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@NodeEntity
public class Surveyor {
    @Id
    private Integer id;

    private String name;

    private String email;
    private String password;
    private Date timeStamp;
    @Relationship(type = "Creates", direction = Relationship.UNDIRECTED)
    List<Survey> SurveysList = new ArrayList<>();
}