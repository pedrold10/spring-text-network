package br.com.shoyu_backend.controller;

import br.com.shoyu_backend.model.entities.Post;
import br.com.shoyu_backend.model.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostController{
    private final PostService postService;

    @Autowired
    public PostController(PostService postService){
        this.postService = postService;
    }

    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    public List<Post> listPost(){
        return postService.listPost();
    }

    @RequestMapping(value = "/{id}/posts", method = RequestMethod.GET)
    public List<Post> postsPorId(@PathVariable Long id){
        return postService.postPorUserID(id);
    }
}
