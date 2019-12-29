// External Dependancies
const boom = require('boom')

// Get Data Models
const Bookmark = require('../models/Bookmark')

// Get all bookmarks
exports.getBookmarks = async (req, reply) => {
  try {
    const bookmarks = await Bookmark.find()
    return bookmarks
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single bookmark by ID
exports.getSingleBookmark = async (req, reply) => {
  try {
    const id = req.params.id
    const bookmark = await Bookmark.findById(id)
    return bookmark
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new Bookmark
exports.addBookmark = async (req, reply) => {
  try {
    const bookmark = new Bookmark(req.body)
    return bookmark.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing Bookmark
exports.updateBookmark = async (req, reply) => {
  try {
    const id = req.params.id
    const bookmark = req.body
    const { ...updateData } = bookmark
    const update = await Bookmark.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a Bookmark
exports.deleteBookmark = async (req, reply) => {
  try {
    const id = req.params.id
    const bookmark = await Bookmark.findByIdAndRemove(id)
    return bookmark
  } catch (err) {
    throw boom.boomify(err)
  }
}