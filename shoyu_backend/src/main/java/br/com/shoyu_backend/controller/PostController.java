package br.com.shoyu_backend.controller;

import br.com.shoyu_backend.model.entities.Post;
import br.com.shoyu_backend.model.entities.User;
import br.com.shoyu_backend.model.services.PostService;
import br.com.shoyu_backend.model.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController{

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    public List<Post> listPost(){
        return postService.listPost();
    }

    @RequestMapping(value = "/users/{id}/posts", method = RequestMethod.GET)
    public List<Post> postsPorId(@PathVariable Long id){
        return postService.postPorUserID(id);
    }

    @RequestMapping("/posts")
    public ResponseEntity<Post> createPost(@RequestBody Post post){
        Long userId = post.getUser().getId();
        User user = userService.userPorId(userId);

        if (user == null) {
            return ResponseEntity.badRequest().build();
        }

        post.setUser(user);
        Post newPost = postService.savePost(post);
        return ResponseEntity.ok(newPost);
    }
}
