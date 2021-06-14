const Role = require('../models/roleModel');

/**
 * GET: /api/elearning/roles
 * Returns all roles
 */
async function getAllRoles(req, res, next) {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    next(error);
  }
}

/**
 * GET: /api/elearning/roles/:id
 * Returns a single role by ID
 */
async function getEachRole(req, res, next) {
  try {
    const role = await Role.findById(req.params.id);
    // Return invalid role ID error message
    if (role === null) {
      return res.json({ status: 404, error: 'Role ID does not exist' });
    }
    res.json(role);
  } catch (error) {
    // Return invalid role ID error message
    if (error.name === 'CastError') {
      return res.json({ status: 404, error: 'Invalid role ID' });
    }
    next(error);
  }
}

/**
 * POST: /api/elearning/roles
 * Add a new role and returns it in the response
 */
async function addRole(req, res, next) {
  const newRole = new Role(req.body);

  // Return error message for name field
  if (!newRole.name || typeof newRole.name !== 'string') {
    return res.json({
      status: 404,
      error: 'Role name field require',
    });
  }

  try {
    const createdRole = await newRole.save();
    res.json(createdRole);
  } catch (error) {
    // Return duplicate key error message
    if (error.code === 11000) {
      return res.json({ status: 404, error: 'Role already in use' });
    }
    next(error);
  }
}

/**
 * PUT: /api/elearning/roles/:id
 * Update a role by ID and returns it in the response
 */
async function updateRole(req, res, next) {
  // Return error message for name field
  if (!req.body.name || typeof req.body.name !== 'string') {
    return res.json({
      status: 404,
      error: 'Name field require',
    });
  }
  try {
    const role = await Role.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // Return invalid role ID error message
    if (role === null) {
      return res.json({ status: 404, error: 'Role ID does not exist' });
    }
    res.json(role);
  } catch (error) {
    // Return duplicate key error message
    if (error.code === 11000) {
      return res.json({ status: 404, error: 'Name already in use' });
    }
    // Return invalid role ID error message
    if (error.name === 'CastError') {
      return res.json({ status: 404, error: 'Invalid role ID' });
    }
    next(error);
  }
}

/**
 * DELETE: /api/elearning/roles/:id
 * Delete a role by ID and returns a json message
 */
async function deleteRole(req, res, next) {
  try {
    const deleteRole = await Role.findByIdAndRemove(req.params.id);
    if (deleteRole === null) {
      return res.json({ status: 404, error: 'Role ID does not exist' });
    }
    res.json({ status: 200, message: `A ${deleteRole} has been deleted` });
  } catch (error) {
    // Return invalid role ID error message
    if (error.name === 'CastError') {
      return res.json({ status: 404, error: 'Invalid role ID' });
    }
    next(error);
  }
}

module.exports = {
  getAllRoles,
  getEachRole,
  addRole,
  updateRole,
  deleteRole,
};
