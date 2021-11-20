const Bootcamp = require('../models/Bootcamp');

// @desc        get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
	res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc        get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

// @desc        create bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.create(req.body);

		res.status(201).json({
			succes: true,
			data: bootcamp,
		});
	} catch (err) {
		res.status(400).json({
			success: false,
		});
	}
};

// @desc        update bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc        delete bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
