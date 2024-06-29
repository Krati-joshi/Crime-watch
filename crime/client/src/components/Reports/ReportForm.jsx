import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #939185; /* Dark background color */
  color: #fff; /* Text color */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #777777; /* Darker background for select */
  color: #fff; /* Text color */
`;

const TextArea = styled.textarea`
  width: 98%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 80px;
  background-color: #777777; /* Darker background for textarea */
  color: #fff; /* Text color */
`;

const Input = styled.input`
  width: 98%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #777777; /* Darker background for input */
  color: #fff; /* Text color */
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f9a825;
  display : flex;
  align-items: center;
  justify-content:center;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const PreviousReports = styled.div`
  margin-top: 30px;
`;

const ReportItem = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  background-color: #555; /* Darker background for report item */
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

const Details = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #666; /* Darker background for details */
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ReportCrime = () => {
  const [crimeType, setCrimeType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [records, setRecords] = useState([
    { id: 1, crimeType: 'Theft', description: 'Stolen bicycle', location: 'Park', time: '2024-06-29T10:00' },
    { id: 2, crimeType: 'Assault', description: 'Physical altercation', location: 'Street', time: '2024-06-28T15:30' }
  ]); // Default example records
  const [editId, setEditId] = useState(null);
  const [viewRecordId, setViewRecordId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (crimeType && description && location && time) {
      const newRecord = { id: editId || records.length + 1, crimeType, description, location, time };
      if (editId) {
        setRecords(records.map(record => (record.id === editId ? newRecord : record)));
        setEditId(null);
      } else {
        setRecords([...records, newRecord]);
      }
      alert('Crime report submitted!');
      setCrimeType('');
      setDescription('');
      setLocation('');
      setTime('');
      setError('');
    } else {
      setError('Please fill in all fields.');
    }
  };

  const handleEdit = (record) => {
    setCrimeType(record.crimeType);
    setDescription(record.description);
    setLocation(record.location);
    setTime(record.time);
    setEditId(record.id);
  };

  const toggleViewRecord = (recordId) => {
    setViewRecordId(viewRecordId === recordId ? null : recordId);
  };

  return (
    <Container>
      <Title>Report a Crime</Title>
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="crimeType">Type of Crime:</Label>
          <Select
            id="crimeType"
            value={crimeType}
            onChange={(e) => setCrimeType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Theft">Theft</option>
            <option value="Assault">Assault</option>
            <option value="Vandalism">Vandalism</option>
            <option value="Other">Other</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description:</Label>
          <TextArea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the crime..."
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="location">Location:</Label>
          <Input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter the location..."
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="time">Time:</Label>
          <Input
            type="datetime-local"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">
          {editId ? 'Update Report' : 'Submit Report'}
        </Button>
      </Form>
      <PreviousReports>
        <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Previous Reports</h3>
        {records.length === 0 ? (
          <p>No records available.</p>
        ) : (
          records.map((record) => (
            <ReportItem key={record.id} onClick={() => toggleViewRecord(record.id)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: '0' }}>{record.crimeType}</h4>
                <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#fff' }}>{record.description}</p>
              </div>
              {viewRecordId === record.id && (
                <Details>
                  <p style={{ fontWeight: 'bold', marginBottom: '5px', color: '#fff' }}>Details:</p>
                  <p style={{ color: '#fff' }}>Location: {record.location}</p>
                  <p style={{ color: '#fff' }}>Time: {record.time}</p>
                  <div style={{ marginTop: '10px' }}>
                    <button onClick={() => handleEdit(record)}>Edit</button>
                  </div>
                </Details>
              )}
            </ReportItem>
          ))
        )}
      </PreviousReports>
    </Container>
  );
};

export default ReportCrime;
