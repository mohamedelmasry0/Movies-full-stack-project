package com.MoviesELMASRY.MoviesMongoDB;

import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.mvc.method.RequestMappingInfo;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

@SpringBootApplication
@ComponentScan({ "com.MoviesELMASRY.repositories","com.MoviesELMASRY.controller" })
public class MoviesMongoDbApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesMongoDbApplication.class, args);
	}

	
	@EventListener
	public void handleContextRefresh(ContextRefreshedEvent event) {
	    ApplicationContext applicationContext = event.getApplicationContext();
	    RequestMappingHandlerMapping requestMappingHandlerMapping = applicationContext
	        .getBean("requestMappingHandlerMapping", RequestMappingHandlerMapping.class);
	    Map<RequestMappingInfo, HandlerMethod> map = requestMappingHandlerMapping
	        .getHandlerMethods();
	    map.forEach((key, value) -> {
	    	System.out.println(key);
	    	System.out.println(value);
	    });
	}
}
