import prisma from "../lib/prisma.js";

export const getPosts = async(req, res) => {

    const query = req.query;

    try {

        const posts = await prisma.post.findMany({
            where: {
                city: query.city || undefined,
                type: query.type || undefined,
                property: query.property || undefined,
                bedroom: parseInt(query.bedroom) || undefined,
                price: {
                    gte: parseInt(query.minPrice) || undefined,
                    lte: parseInt(query.maxPrice) || undefined,
                },
                userId: query.userId
            },
        });

        // setTimeout(() => {
        res.status(200).json(posts);

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Failed to get posts"
        });
    }

}

export const getPost = async(req, res) => {

    try {

        const id = req.params.id;

        const post = await prisma.post.findUnique({
            where: { id }
        });

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const userId = post.userId;

        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        res.status(200).json({
            post: post,
            user: user
        });

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Failed to get posts"
        });
    }

}

export const addPost = async(req, res) => {

    const body = req.body.postData;
    const tokenUserId = req.tokenUserId;
    try {
        const newPost = await prisma.post.create({
            data: {
                ...body
            }
        })

        res.status(200).json(newPost)

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Failed to create posts"
        });
    }

}

export const deletePost = async(req, res) => {

    try {

        res.status(200).json()

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Failed to get posts"
        });
    }

}

export const updatePost = async(req, res) => {

    const id = req.parms.id;
    const tokenUserId = req.userId;

    try {

        const post = await prisma.post.findUnique({
            where: { id }
        })

        if (post.userId != tokenUserId) {
            return res.status(403).json({ message: "Not Authorised" })
        }

        await prisma.post.delete({
            where: { id }
        })

        res.status(200).json({ message: "Post deleted" })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Failed to get posts"
        });
    }


}


export const savePost = async(req, res) => {
    const postId = req.body.id;
    const tokenUserId = req.body.userId;

    console.log(req.body);

    try {
        // Insert a new record into the SavedPost table
        const savedPost = await prisma.savedPost.create({
            data: {
                userId: tokenUserId,
                postId: postId,
            },
        });

        res.status(200).json({ message: "Post saved", savedPost });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Failed to save post"
        });
    }
};


export const savedPost = async(req, res) => {
    const userId = req.query.userId;

    try {
        const savedPosts = await prisma.savedPost.findMany({
            where: { userId: userId }
        });

        if (savedPosts.length === 0) {
            return res.status(404).json({ message: "No saved posts" });
        }

        console.log(savedPosts);

        const postDetails = await Promise.all(
            savedPosts.map(async(savedPost) => {
                const post = await prisma.post.findUnique({
                    where: { id: savedPost.postId }
                });
                return post;
            })
        );

        res.status(200).json(postDetails);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Failed to get saved posts"
        });
    }
};