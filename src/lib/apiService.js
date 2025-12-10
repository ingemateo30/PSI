// src/lib/apiService.js - Cliente API para PSI Web

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://administrativo.psi.net.co/api/v1';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include',
      ...options,
    };

    try {
      console.log('🔗 Petición a:', url);

      const response = await fetch(url, config);

      console.log('📡 Status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('❌ Error:', error);
      throw error;
    }
  }

  get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    return this.request(url, { method: 'GET' });
  }

  post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

const apiService = new ApiService();

// ============================================
// SERVICIOS DE REGISTRO WEB
// ============================================

export const registroWebService = {
  registrar: (data) => {
    console.log('📝 Registrando cliente:', data);
    return apiService.post('/registro-web/registro', data);
  }
};

export const planesPublicosService = {
  getActivos: () => {
    console.log('📦 Obteniendo planes');
    return apiService.get('/registro-web/planes');
  }
};

export const ciudadesService = {
  getAll: () => {
    console.log('🏙️ Obteniendo ciudades');
    return apiService.get('/registro-web/ciudades');
  }
};

export const sectoresService = {
  getByCiudad: (ciudadId) => {
    console.log('🗺️ Obteniendo sectores para ciudad:', ciudadId);
    return apiService.get(`/registro-web/sectores/${ciudadId}`);
  }
};

// ============================================
// SERVICIOS DE CONSULTA DE CLIENTE
// ============================================

// Sección completa de consultaClienteService en apiService.js

const consultaClienteService = {
  // ✅ Validar cliente
  validar: (data) => {
    console.log('🔐 Validando cliente:', data);
    return apiService.request('/consulta-cliente/validar', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  // ✅ Obtener facturas
  obtenerFacturas: (token) => {
    console.log('📄 Obteniendo facturas');
    return apiService.request('/consulta-cliente/facturas', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },

  // ✅ Obtener contratos
  obtenerContratos: (token) => {
    console.log('📋 Obteniendo contratos');
    return apiService.request('/consulta-cliente/contratos', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },

  // ✅ Obtener servicios
  obtenerServicios: (token) => {
    console.log('🔧 Obteniendo servicios');
    return apiService.request('/consulta-cliente/servicios', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },

  // ✅ Obtener instalaciones
  obtenerInstalaciones: (token) => {
    console.log('🔨 Obteniendo instalaciones');
    return apiService.request('/consulta-cliente/instalaciones', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },

  // ✅ Obtener detalle de factura
  obtenerDetalleFactura: (facturaId, token) => {
    console.log('🧾 Obteniendo detalle de factura:', facturaId);
    return apiService.request(`/consulta-cliente/facturas/${facturaId}/detalle`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },

  // ✅ CORREGIDO: Descargar PDF de factura
  descargarPDFFactura: async (facturaId, token) => {
    try {
      console.log('📥 Descargando PDF de factura:', facturaId);
      
      const url = `${API_BASE_URL}/consulta-cliente/facturas/${facturaId}/pdf`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Error al descargar factura');
      }

      // Obtener el blob del PDF
      const blob = await response.blob();
      
      // Obtener nombre del archivo del header
      const contentDisposition = response.headers.get('Content-Disposition');
      let filename = `factura_${facturaId}.pdf`;
      
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        if (filenameMatch && filenameMatch[1]) {
          filename = filenameMatch[1].replace(/['"]/g, '');
        }
      }
      
      // Crear URL temporal para el blob
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Crear elemento <a> para forzar descarga
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      
      // Limpiar
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      
      console.log('✅ PDF de factura descargado exitosamente');
      return { success: true };
      
    } catch (error) {
      console.error('❌ Error descargando PDF de factura:', error);
      throw error;
    }
  },

  // ✅ CORREGIDO: Descargar PDF de contrato
  descargarPDFContrato: async (contratoId, token) => {
    try {
      console.log('📥 Descargando PDF del contrato:', contratoId);
      
      const url = `${API_BASE_URL}/consulta-cliente/contratos/${contratoId}/pdf`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Error al descargar contrato');
      }

      // Obtener el blob del PDF
      const blob = await response.blob();
      
      // Obtener nombre del archivo del header
      const contentDisposition = response.headers.get('Content-Disposition');
      let filename = `contrato_${contratoId}.pdf`;
      
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        if (filenameMatch && filenameMatch[1]) {
          filename = filenameMatch[1].replace(/['"]/g, '');
        }
      }
      
      // Crear URL temporal para el blob
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Crear elemento <a> para forzar descarga
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      
      // Limpiar
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      
      console.log('✅ PDF de contrato descargado exitosamente');
      return { success: true };
      
    } catch (error) {
      console.error('❌ Error descargando PDF de contrato:', error);
      throw error;
    }
  }
};

export { consultaClienteService };
export default apiService;
export { API_BASE_URL };