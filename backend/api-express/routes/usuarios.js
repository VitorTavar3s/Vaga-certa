const express = require('express');
const router = express.Router();
const usuarioRepository = require('../repositories/usuarioRepository');

// Get all users
router.get('/', async (req, res) => {
  try {
    const usuarios = await usuarioRepository.findAll();
    res.json({ usuarios });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// Get user by id
router.get('/:id', async (req, res) => {
  try {
    const user = await usuarioRepository.findById(req.params.id);
    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const user = await usuarioRepository.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

// Update a user
router.put('/:id', async (req, res) => {
  try {
    const user = await usuarioRepository.update(req.params.id, req.body);
    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    const user = await usuarioRepository.remove(req.params.id);
    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    res.status(500).json({ error: "Erro ao excluir usuário" });
  }
});

module.exports = router;
