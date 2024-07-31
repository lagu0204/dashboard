import { Router } from 'express';
import { deleteProduct, getProduct, getProducts, postProduct, uptadeProduct } from '../controllers/producto';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct);
router.post('/', postProduct);
router.put('/:id', uptadeProduct);

export default router;