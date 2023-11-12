const db = require('../models')
const jobController = require('../controllers/job');


jest.mock('../models', () => ({
  Job: {
    findAll: jest.fn(),
    destroy: jest.fn(),
  },
}));

describe('jobController', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const mockJobDatabase = [
    {
      id: 1,
      users_id: 2,
      job_name: "Frontend Developer",
      type: "fulltime",
      category: "IT",
      requirement: "S1",
      description: "Membuat aplikasi web dengan menggunakan HTML, CSS, dan Javascript",
      required_skill: "HTML, CSS, Javascript",
      salary: "Rp. 10.000.000",
      createdAt: "2023-11-09T14:06:17.350Z",
      updatedAt: "2023-11-09T14:06:17.350Z"
    },
    {
      id: 2,
      users_id: 2,
      job_name: "Backend Developer",
      type: "freelance",
      category: "IT",
      requirement: "S1",
      description: "Membuat aplikasi web dengan menggunakan PHP, NodeJS, dan Python",
      required_skill: "PHP, NodeJS, Python",
      salary: "Rp. 10.000.000",
      createdAt: "2023-11-09T14:06:17.350Z",
      updatedAt: "2023-11-09T14:06:17.350Z"
    },
  ];


  describe('filterJobsByType', () => {
    it('should filter jobs by type successfully', async () => {
      const mockType = 'fulltime';
      db.Job.findAll.mockResolvedValue(mockJobDatabase);

      const req = { params: { type: mockType } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await jobController.filterJobsByType(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: `Success get all jobs for type ${mockType}`,
        data: mockJobDatabase,
      });
    });

    it('should handle errors when filtering jobs by type', async () => {
      const mockType = 'fulltime';
      db.Job.findAll.mockRejectedValue(new Error('Database error'));

      const req = { params: { type: mockType } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await jobController.filterJobsByType(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Internal server error',
        error: expect.any(Error),
      });
    });
  });

  describe('filterJobsByCategory', () => {
    it('should filter jobs by category successfully', async () => {
      const mockCategory = 'IT';
      db.Job.findAll.mockResolvedValue(mockJobDatabase);

      const req = { params: { category: mockCategory } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await jobController.filterJobsByCategory(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: `Success get all jobs for category ${mockCategory}`,
        data: mockJobDatabase,
      });
    });

    it('should handle errors when filtering jobs by category', async () => {
      const mockCategory = 'IT';
      db.Job.findAll.mockRejectedValue(new Error('Database error'));

      const req = { params: { category: mockCategory } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await jobController.filterJobsByCategory(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Internal server error',
        error: expect.any(Error),
      });
    });
  });

  describe('deleteJob', () => {
    it('should delete a job successfully', async () => {
      const mockJobId = 1;
      db.Job.destroy.mockResolvedValue(1);

      const req = { params: { id: mockJobId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await jobController.deleteJob(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: `Job with id ${mockJobId} deleted!` });
    });

    it('should handle errors when deleting a job', async () => {
      const mockJobId = 1;
      db.Job.destroy.mockRejectedValue(new Error('Database error'));

      const req = { params: { id: mockJobId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await jobController.deleteJob(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Internal server error',
        error: expect.any(Error),
      });
    });
  });
});
