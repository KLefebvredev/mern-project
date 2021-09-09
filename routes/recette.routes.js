const router = require('express').Router();
const recetteController = require('../controllers/recette.controllers');
const multer = require('multer');
const upload = multer();

router.get('/', recetteController.readRecette);
router.post('/', upload.single('file'), recetteController.createRecette);
router.put('/:id', recetteController.updateRecette);
router.delete('/:id', recetteController.deleteRecette);
router.patch('/like-recette/:id', recetteController.likeRecette);
router.patch('/unlike-recette/:id', recetteController.unlikeRecette);

//comments
router.patch('/comment-recette/:id', recetteController.commentRecette);
router.patch('/edit-comment-recette/:id', recetteController.editCommentRecette);
router.patch('/delete-comment-recette/:id', recetteController.deleteCommentRecette);

module.exports = router;    