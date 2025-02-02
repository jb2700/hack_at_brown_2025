// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router'; 
// import { useGlobalSearchParams } from 'expo-router';

// interface Issue {
//   id: string;
//   title: string;
//   details: string;
// }

// const UserHomePage = () => {
//   const router = useRouter(); 
//   const [issues, setIssues] = useState<Issue[]>([]);
//   const [expandedIssue, setExpandedIssue] = useState<string | null>(null);
//   const { id, title, details } = useGlobalSearchParams();

//   useEffect(() => {
//     if (id && title && details) {
//       const newIssueObj: Issue = {
//         id: id.toString(),
//         title: title.toString(),
//         details: details.toString(),
//       };
//       setIssues((prevIssues) => [...prevIssues, newIssueObj]);
//     }
//   }, [id, title, details]);

//   const handleIssueClick = (id: string) => {
//     setExpandedIssue(expandedIssue === id ? null : id);
//   };

//   const navigateToCreateIssue = () => {
//     router.push('/create_issue');
//   };

//   // Handle issue deletion
//   const deleteIssue = (id: string) => {
//     setIssues(issues.filter(issue => issue.id !== id)); // Filter out the issue by id
//   };

//   const renderIssue = ({ item }: { item: Issue }) => (
//     <View style={styles.issueContainer}>
//       <View style={styles.issueTitleContainer}>
//         <TouchableOpacity onPress={() => handleIssueClick(item.id)}>
//           <Text style={styles.issueTitle}>{item.title}</Text>
//         </TouchableOpacity>

//         {/* Only show delete button if the issue is not expanded */}
//         {expandedIssue !== item.id && (
//           <TouchableOpacity onPress={() => deleteIssue(item.id)} style={styles.deleteButton}>
//             <Text style={styles.deleteButtonText}>-</Text>
//           </TouchableOpacity>
//         )}
//       </View>

//       {expandedIssue === item.id && (
//         <View style={styles.issueDetails}>
//           <Text>{item.details}</Text>
//         </View>
//       )}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Issues</Text>

//       <TouchableOpacity style={styles.addButton} onPress={navigateToCreateIssue}>
//         <Text style={styles.addButtonText}>+</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={issues}
//         renderItem={renderIssue}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.issueList} 
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
//   addButton: {
//     position: 'absolute',
//     top: 50,
//     left: '55%',
//     transform: [{ translateX: -20 }],
//     backgroundColor: '#007BFF',
//     padding: 15,
//     borderRadius: 50,
//   },
//   addButtonText: {
//     fontSize: 30,
//     color: '#fff',
//   },
//   issueContainer: {
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 4,
//   },
//   issueTitleContainer: {
//     flexDirection: 'row', // This keeps the title and delete button horizontal
//     justifyContent: 'space-between', // Space between title and delete button
//     alignItems: 'center', // Center content vertically
//   },
//   issueTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     flex: 1, // Ensures title takes available space
//   },
//   issueDetails: {
//     marginTop: 10,
//     paddingLeft: 10,
//     paddingTop: 5,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//   },
//   deleteButton: {
//     backgroundColor: '#FF6347', // Red background for delete button
//     padding: 5,
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   deleteButtonText: {
//     fontSize: 24,
//     color: '#fff',
//   },
//   issueList: {
//     marginTop: 80, 
//   },
// });

// export default UserHomePage;
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; 
import { useGlobalSearchParams } from 'expo-router';

interface Issue {
  id: string;
  title: string;
  details: string;
}

const UserHomePage = () => {
  const router = useRouter(); 
  const [issues, setIssues] = useState<Issue[]>([]);
  const [expandedIssue, setExpandedIssue] = useState<string | null>(null);
  const { id, title, details } = useGlobalSearchParams();

  useEffect(() => {
    if (id && title && details) {
      const newIssueObj: Issue = {
        id: id.toString(),
        title: title.toString(),
        details: details.toString(),
      };
      setIssues((prevIssues) => [...prevIssues, newIssueObj]);
    }
  }, [id, title, details]);

  const handleIssueClick = (id: string) => {
    setExpandedIssue(expandedIssue === id ? null : id);
  };

  const navigateToCreateIssue = () => {
    router.push('/create_issue');
  };

  const deleteIssue = (id: string) => {
    setIssues(issues.filter(issue => issue.id !== id));
  };

  const renderIssue = ({ item }: { item: Issue }) => (
    <View style={styles.issueContainer}>
      <View style={styles.issueTitleContainer}>
        <TouchableOpacity onPress={() => handleIssueClick(item.id)}>
          <Text style={styles.issueTitle}>{item.title}</Text>
        </TouchableOpacity>

        {expandedIssue !== item.id && (
          <TouchableOpacity onPress={() => deleteIssue(item.id)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>🗑️</Text>
          </TouchableOpacity>
        )}
      </View>

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
        contentContainerStyle={styles.issueList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f9',  // Light background color
  },
  header: {
    fontSize: 28, // Slightly larger font for better visibility
    fontWeight: '700', // Bold text
    color: '#333', // Dark color for header
    marginBottom: 20,
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    top: 60,
    left: '55%',
    transform: [{ translateX: -20 }],
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff',
  },
  issueContainer: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  issueTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  issueTitle: {
    fontSize: 20,
    fontWeight: '600', // Bold title
    color: '#333',
    flex: 1,
  },
  issueDetails: {
    marginTop: 10,
    paddingLeft: 10,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  deleteButton: {
    backgroundColor: '#FF6347', // Red color for delete button
    padding: 8,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  issueList: {
    marginTop: 80, 
  },
});

export default UserHomePage;
