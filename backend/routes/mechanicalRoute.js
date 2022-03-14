import express from 'express';
import Mechanical from '../models/mechanicalModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

// router.get('/', async (req, res) => {
//   const category = req.query.category ? { category: req.query.category } : {};
//   const searchKeyword = req.query.searchKeyword
//     ? {
//         name: {
//           $regex: req.query.searchKeyword,
//           $options: 'i',
//         },
//       }
//     : {};
//   const sortOrder = req.query.sortOrder
//     ? req.query.sortOrder === 'lowest'
//       ? { price: 1 }
//       : { price: -1 }
//     : { _id: -1 };
//   const mechanicals = await mechanical.find({ ...category, ...searchKeyword }).sort(
//     sortOrder
//   );
//   res.send(mechanicals);
// });

router.get('/:id', async (req, res) => {
  const mechanical = await Mechanical.findOne({_id : req.params.id});
  if(mechanical){
    res.send(mechanical);
} else {
  res.status(404).send({ message: 'mechanical Not Found.' });
}
  }
);

router.get('/', async (req, res) => {
  const mechanical = await Mechanical.find({});
    res.send(mechanical);
  
  }
);

router.put('/:id', isAuth, isAdmin, async (req, res) => {
  const mechanicalId = req.params.id;
  const mechanical = await Mechanical.findById(mechanicalId);
  if (mechanical) {
    mechanical.name = req.body.name;
    mechanical.place = req.body.place;
    mechanical.speclization = req.body.speclization;
    mechanical.contact = req.body.contact;
    const updatedmechanical = await mechanical.save();
    if (updatedmechanical) {
      return res.status(200).send({ message: 'Mechanical Updated', data1: updatedmechanical });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Mechanical.' });
});

router.delete('/:id', isAuth, isAdmin, async (req, res) => {
  const deletedmechanical = await Mechanical.findById(req.params.id);
  if (deletedmechanical) {
    await deletedmechanical.remove();
    res.send({ message: 'Mechanical Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});

router.post('/', isAuth, isAdmin, async (req, res) => {
  const mechanical = new mechanical({
    name: req.body.name,
    place: req.body.place,
    speclization: req.body.speclization,
    contact: req.body.contact,
  });
  const newmechanical = await mechanical.save();
  if (newmechanical) {
    return res.status(201) .send({ message: 'New Mechanical Created', data1: newmechanical });
  }
  return res.status(500).send({ message: ' Error in Creating Mechanical.' });
});

export default router;
