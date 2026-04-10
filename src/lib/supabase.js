// ----------------------------------------------------
// MODO DEMO SEGURO - SIN CONEXION A BASE DE DATOS
// ----------------------------------------------------
// Este archivo fue bloqueado a propósito para 
// asegurar que NINGUNA página o componente pueda
// escribir o consultar la base de datos de producción.
// ----------------------------------------------------

export const supabase = {
    // Simulamos un comportamiento vacío que no da errores
    from: () => ({
        select: () => ({ 
            single: () => ({ data: null }), 
            or: () => ({ data: null }), 
            then: (cb) => { cb({ data: null }); return Promise.resolve({ data: null }); }
        }),
        insert: () => ({ select: () => ({ single: () => ({ data: { id: Date.now() } }) }) }),
        update: () => ({ eq: () => ({ select: () => ({ single: () => ({ data: null }) }) }) }),
        delete: () => ({ eq: () => Promise.resolve({ data: null }) }),
    }),
    channel: () => ({ on: () => ({ subscribe: () => {} }) }),
    removeChannel: () => {}
};

console.log('🔒 MODO DEMO: Supabase Desconectado por seguridad.');
