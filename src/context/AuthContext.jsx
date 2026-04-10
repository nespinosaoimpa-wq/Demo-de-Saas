import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        setLoading(true);
        // Desconexión de base de datos - Usando datos estáticos para el Demo
        const demoEmployees = [
            { id: 'admin-demo', name: 'Administrador Demo', role: 'admin', pin: '1234' }
        ];
        setEmployees(demoEmployees);
        setLoading(false);
    };

    const login = (employeeId, pin) => {
        const emp = employees.find(e => e.id === employeeId);
        if (emp && emp.pin === pin) {
            setUser(emp);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, employees, loading, login, logout, refreshEmployees: loadEmployees }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
