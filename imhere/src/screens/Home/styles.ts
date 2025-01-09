import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    paddingTop: 10,
    paddingLeft: 14,
    paddingRight: 14,
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input:{
    height:56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 22,
    marginRight: 10,
    flex: 1,
  },
  buttonText:{
    color: '#FFF',
    fontSize: 24,
    textAlign: 'center',
  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
})