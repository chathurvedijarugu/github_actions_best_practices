package com.zemoso.appointments.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFound extends RuntimeException{
    public String entity;
    public ResourceNotFound(String entity){
        super("Entity not found : "+entity);
        this.entity=entity;
    }
}
