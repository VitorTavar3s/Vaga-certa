import React, { useEffect, useState } from "react";
import { Vaga } from "../../components/Vaga";
import { FlatList, ActivityIndicator, View, Text } from "react-native";
import { Container, TextBemVindo } from "./styles";
import vagasApi from "../../services/vagasApi";
import api from "../../services/api";
import { useUsuario } from '../../context/UsuarioContext';
import { VagaType } from "../../utils/Types";

export default function Home() {
  const { usuario } = useUsuario();
  const [vagas, setVagas] = useState<VagaType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVagas() {
      try {
        const response = await api.get('/api/vagas');
        console.log("Dados recebidos:", response.data);
        setVagas(response.data.jobs);
      } catch (error) {
        console.error("Erro ao buscar vagas:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVagas();
  }, []);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#007bff" />
      </Container>
    );
  }

  if (vagas.length === 0) {
    return (
      <Container>
        <Text style={{ textAlign: "center", marginTop: 20 }}>Nenhuma vaga encontrada.</Text>
      </Container>
    );
  }

  const formatarData = (data: string | null) => {
    if (!data) return "Data não disponível";
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString("pt-BR");
  };

  return (
    <Container>
      <View>
        {usuario ? (
          <>
            <TextBemVindo>Bem-vindo(a), {usuario.nome}!</TextBemVindo>
          </>
        ) : (
          <TextBemVindo>Nenhum usuário logado</TextBemVindo>
        )}
      </View>
      <FlatList
        data={vagas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Vaga
            id={item.id}
            titulo={item.titulo}
            dataCadastro={formatarData(item.dataCadastro)}
            empresa={item.empresa}
          />
        )}
      />
    </Container>
  );
}