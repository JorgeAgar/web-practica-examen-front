export const api = {
    URL: "https://api.example.com",
    getTalleres: async () => {
        // const response = await fetch(`${api.URL}/talleres`);
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        // return response.json();

        return [
            { id: 1, nombre: "Taller de Programación", descripcion: "Aprende a programar desde cero." },
            { id: 2, nombre: "Taller de Diseño Gráfico", descripcion: "Crea diseños impactantes." },
            { id: 3, nombre: "Taller de Fotografía", descripcion: "Captura momentos únicos." },
        ];
    },
}