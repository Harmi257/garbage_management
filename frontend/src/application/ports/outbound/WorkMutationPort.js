// Abstract port interface for outbound mutations
export default class WorkMutationPort {
    async createWork(workData) {
      throw new Error('createWork() must be implemented by adapter');
    }
  }
  