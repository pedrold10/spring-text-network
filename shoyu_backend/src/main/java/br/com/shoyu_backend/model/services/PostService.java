package br.com.shoyu_backend.model.services;

import br.com.shoyu_backend.model.entities.Post;
import br.com.shoyu_backend.model.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository){
        this.postRepository = postRepository;
    }

    public List<Post> listPost(){
        return postRepository.findAll();
    }

    public List<Post> postPorUserID(long id){
        return postRepository.findByUserId(id);
    }

    public Post savePost(Post post){
        return postRepository.save(post);
    }
}
