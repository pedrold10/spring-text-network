package br.com.shoyu_backend.controller;

import br.com.shoyu_backend.model.entities.Post;
import br.com.shoyu_backend.model.entities.User;
import br.com.shoyu_backend.model.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping("/")
    public ResponseEntity<Post> createPost(@RequestBody Post post){
        Post newPost = postService.savePost(post);
        return ResponseEntity.ok(newPost);
    }
}
