// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

// interface Issue {
//   id: string;
//   title: string;
//   details: string;
// }

// const UserHomePage = () => {
//   const [issues, setIssues] = useState<Issue[]>([]);
//   const [newIssue, setNewIssue] = useState<string>('');
//   const [expandedIssue, setExpandedIssue] = useState<string | null>(null); 

//   // Add new issue function
//   const addIssue = () => {
//     if (newIssue.trim()) {
//       const newIssueObj: Issue = {
//         id: Date.now().toString(), 
//         title: newIssue,
//         details: 'More information about this issue', 
//       };
//       setIssues([...issues, newIssueObj]);
//       setNewIssue(''); 
//     }
//   };

//   // Handle expanding or collapsing an issue
//   const handleIssueClick = (id: string) => {
//     setExpandedIssue(expandedIssue === id ? null : id); 
//   };

//   // Update issue details when typing
//   const handleDetailsChange = (id: string, newDetails: string) => {
//     setIssues((prevIssues) =>
//       prevIssues.map((issue) =>
//         issue.id === id ? { ...issue, details: newDetails } : issue
//       )
//     );
//   };

//   // Render each issue
//   const renderIssue = ({ item }: { item: Issue }) => (
//     <View style={styles.issueContainer}>
//       <TouchableOpacity onPress={() => handleIssueClick(item.id)}>
//         <Text style={styles.issueTitle}>{item.title}</Text>
//       </TouchableOpacity>
//       {expandedIssue === item.id && (
//         <View style={styles.issueDetails}>
//           <TextInput
//             style={styles.detailsInput}
//             value={item.details}
//             onChangeText={(text) => handleDetailsChange(item.id, text)}
//             multiline
//           />
//         </View>
//       )}
//     </View>
//   );

//   // Handle 'Enter' key to add issue
//   const handleKeyPress = (e: any) => {
//     if (e.nativeEvent.key === 'Enter') {
//       addIssue();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Issues</Text>


//       <View style={styles.addIssueContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter new health issue"
//           value={newIssue}
//           onChangeText={setNewIssue}
//           onSubmitEditing={addIssue} // Add issue when pressing enter
//           returnKeyType="done" // Make "Done" button show on the keyboard
//         />
//       </View>

//       {/* List of issues */}
//       <FlatList
//         data={issues}
//         renderItem={renderIssue}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   // + button styles
//   plusButton: {
//     position: 'absolute',
//     top: 30,
//     left: '50%',
//     transform: [{ translateX: -25 }],
//     backgroundColor: '#007BFF',
//     borderRadius: 50,
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   plusButtonText: {
//     color: 'white',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   addIssueContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     width: '80%',
//     marginRight: 10,
//     borderRadius: 4,
//   },
//   issueContainer: {
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 4,
//   },
//   issueTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   issueDetails: {
//     marginTop: 10,
//     paddingLeft: 10,
//     paddingTop: 5,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//   },
//   detailsInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     width: '100%',
//     borderRadius: 4,
//   },
// });

// export default UserHomePage;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; 

interface Issue {
  id: string;
  title: string;
  details: string;
}

const UserHomePage = () => {
  const router = useRouter(); 
  const [issues, setIssues] = useState<Issue[]>([]);
  const [newIssue, setNewIssue] = useState<string>('');
  const [expandedIssue, setExpandedIssue] = useState<string | null>(null);

  const addIssue = () => {
    if (newIssue.trim()) {
      const newIssueObj: Issue = {
        id: Date.now().toString(),
        title: newIssue,
        details: 'More information about this issue',
      };
      setIssues([...issues, newIssueObj]);
      setNewIssue('');
    }
  };

  const handleIssueClick = (id: string) => {
    setExpandedIssue(expandedIssue === id ? null : id);
  };

  const navigateToCreateIssue = () => {
    router.push('/create_issue');
  };

  const renderIssue = ({ item }: { item: Issue }) => (
    <View style={styles.issueContainer}>
      <TouchableOpacity onPress={() => handleIssueClick(item.id)}>
        <Text style={styles.issueTitle}>{item.title}</Text>
      </TouchableOpacity>
      {expandedIssue === item.id && (
        <View style={styles.issueDetails}>
          <Text>{item.details}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Issues</Text>

      

      <TouchableOpacity style={styles.addButton} onPress={navigateToCreateIssue}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <FlatList
        data={issues}
        renderItem={renderIssue}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  addIssueContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginRight: 10,
    borderRadius: 4,
  },
  issueContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 4,
  },
  issueTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  issueDetails: {
    marginTop: 10,
    paddingLeft: 10,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  addButton: {
    position: 'absolute',
    top: 50,
    left: '55%',
    transform: [{ translateX: -20 }],
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 50,
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff',
  },
});

export default UserHomePage;


{/* <View style={styles.addIssueContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new health issue"
          value={newIssue}
          onChangeText={setNewIssue}
          onSubmitEditing={addIssue} 
          returnKeyType="done" 
        />
      </View> */}