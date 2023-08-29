import { Router } from 'express';
const router = Router();

router.get('/test', (req, res) => {
    res.send('Test ArtTechStore');
});

export default router;