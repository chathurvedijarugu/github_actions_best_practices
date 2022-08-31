package com.zemoso.patientservice.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.zemoso.patientservice.VO.User;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PatientDto {
    private int id;
    private String relation;
    private String age;
    private String name;
    private String gender;
    private User userID;

}
