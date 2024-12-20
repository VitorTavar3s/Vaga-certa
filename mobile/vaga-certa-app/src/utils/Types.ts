export type VagaType = {
    id: number;
    titulo: string;
    descricao: string;
    dataCadastro: string;
    telefone: string;
    status: string;
    empresa: string;
};

export type RootStackParamList = {
    Login: undefined;
    FormScreen: undefined;
    Home: undefined;
    Profile: undefined;
    Details: {id: number};
};