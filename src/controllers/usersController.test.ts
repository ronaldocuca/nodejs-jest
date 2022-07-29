import { Request } from 'express';
import { makeMockResponse } from '../mocks/mockResponse';
import { UsersController } from './usersController';
describe("Users Controller", () => {

    const usersController = new UsersController();


    const mockRequest = {} as Request;
    const mockResponse = makeMockResponse();
    it('Deve listar os usuarios', () => {
        usersController.listarUsuario(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toHaveLength(3);

    });

    it('Deve criar um novo usuário', () => {

        mockRequest.body = {
            name: 'Novo usuário'
        }
        usersController.criarUsuario(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ mensagem: `Usuario Novo usuário criado`});
    });


    it('Não deve criar um usuário com nome em branco', () => {
        mockRequest.body = {
            name: ''
        }

        usersController.criarUsuario(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(403);
        expect(mockResponse.state.json).toMatchObject({ mensagem: 'Não possível criar usuário sem um nome'});
    })
});