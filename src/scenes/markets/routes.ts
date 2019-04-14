import { Router } from 'express';
import marketController from './controller';
const router: Router = Router();

router.get('/', marketController.list);

export default router;
