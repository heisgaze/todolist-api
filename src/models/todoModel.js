const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getData = () => {
  return prisma.todolist_db.findMany();
}

const getDataById = (id) => {
    return prisma.todolist_db.findUnique({ where: { id } });
}

const createData = (data) => {
    return prisma.todolist_db.create({ data });
}

const updateData = (id, data) => {
    return prisma.todolist_db.update({ where: { id }, data })
}

const deleteData = (id) => {
    return prisma.todolist_db.delete({ where: { id } })
}

module.exports = {
    getData,
    getDataById,
    createData,
    updateData,
    deleteData
}