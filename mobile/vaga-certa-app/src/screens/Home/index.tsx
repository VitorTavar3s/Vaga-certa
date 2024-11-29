import React, { useEffect, useState } from "react";
import { Vaga } from "../../components/Vaga";
import { FlatList, ActivityIndicator, View, Text } from "react-native";
import {Container} from "./styles";
import vagasApi from "../../services/vagasApi";

type VagaType = {
    id: string;
    titulo: string;
    descricao: string;
    dataCadastro: string;
    telefone: string;
    status: string;
    empresa: string;
  };

export default function Home(){
    const [vagas, setVagas] = useState<VagaType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchVagas() {
          try {
            const response = await vagasApi.get("/");
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
        <FlatList
            data={vagas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Vaga
                    titulo={item.titulo}
                    descricao={item.descricao}
                    dataCadastro={formatarData(item.dataCadastro)}
                    telefone={item.telefone}
                    status={item.status}
                    empresa={item.empresa}
                />
            )}
        />
        </Container>
    );
}