    import express from 'express';
    import { createTour, deleteTour, featureTous, getAllTour, getTour, getTourBysearch, tourCounts, updateTour } from '../Controllers/tourController.js';
    import { verifyAdmin } from '../utils/verifyToken.js';

    const router = express.Router();
    router.post('/',verifyAdmin,createTour)
    router.put('/:id',verifyAdmin,updateTour)
    router.delete('/:id',verifyAdmin,deleteTour)
    router.get('/search', getTourBysearch);
    router.get('/search/feature',featureTous)
    router.get('/search/count',tourCounts) 
    router.get('/:id',getTour)//single route
    router.get('/', getAllTour);

    export default router;    